// src/api/share.js
import { axiosInstance } from "./axiosInstance";

// 1) slug -> userId
export const getUserIdBySlug = (slug) =>
  axiosInstance.get(`/share/users/${slug}`);

// 2) 특정 유저 프로필 조회 (백엔드 경로 맞춰서 수정해)
export const getUserProfile = (userId) => axiosInstance.get(`/users/${userId}`);

// 3) 특정 유저의 루트 목록 조회 (경로는 스웨거 보고 맞추기)
export const getUserRoutes = ({ userId, page = 0, size = 20 }) =>
  axiosInstance.get(`/users/${userId}/routes`, {
    params: { page, size },
  });

// 4) 친구 추가 / 취소 (백엔드 스펙에 맞게 수정)
export const followUser = (userId) =>
  axiosInstance.post(`/users/${userId}/follow`);

export const unfollowUser = (userId) =>
  axiosInstance.delete(`/users/${userId}/follow`);

export const getFollowStatus = (userId) =>
  axiosInstance.get(`/users/${userId}/follow-status`);
