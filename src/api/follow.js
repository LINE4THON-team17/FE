// src/api/follow.js
import { axiosInstance } from "./axiosInstance";

// 1) slug로 userId 조회
export const getUserIdBySlug = (slug) =>
  axiosInstance.get(`/share/users/${slug}`);

// 2) 팔로우 상태 조회
export const getFollowStatus = (userId) =>
  axiosInstance.get(`/users/${userId}/follow-status`);

// 3) 팔로우
export const followUser = (userId) =>
  axiosInstance.post(`/users/${userId}/follow`);

// 4) 언팔로우
export const unfollowUser = (userId) =>
  axiosInstance.delete(`/users/${userId}/follow`);

// 5) 특정 유저 프로필 조회
// 👉 스웨거에서 정확한 엔드포인트 한 번 확인해서 필요하면 경로만 수정하면 돼
export const getUserProfileById = (userId) =>
  axiosInstance.get(`/users/${userId}`);

// 6) 특정 유저가 작성한 루트 목록 조회
// 이것도 백엔드 스펙에 맞게 경로만 맞춰주면 됨
export const getUserRoutesById = ({ userId, page = 0, size = 20 }) =>
  axiosInstance.get(`/users/${userId}/routes`, {
    params: { page, size },
  });
