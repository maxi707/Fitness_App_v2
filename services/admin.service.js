export const AdminServiceV2 = {
  getAllUsers: async () => {
    return fetch('/api/admin/users').then(res => res.json());
  },
  deleteUser: async (userId) => {
    return fetch(`/api/admin/users/${userId}`, {
      method: 'DELETE',
    });
  },
  getStats: async () => {
    return fetch('/api/admin/stats').then(res => res.json());
  },
  promoteToTrainer: async (userId) => {
    return fetch(`/api/admin/users/${userId}/promote`, {
      method: 'POST',
    });
  },
};