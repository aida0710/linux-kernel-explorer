---
sidebar_position: 3
---
# fs_tcp.h

### ファイル情報

- パス: `drivers/net/ethernet/mellanox/mlx5/core/en_accel/fs_tcp.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 OR Linux-OpenIB */
/* Copyright (c) 2020, Mellanox Technologies inc. All rights reserved. */

#ifndef __MLX5E_ACCEL_FS_TCP_H__
#define __MLX5E_ACCEL_FS_TCP_H__

#include "en/fs.h"

#ifdef CONFIG_MLX5_EN_TLS
int mlx5e_accel_fs_tcp_create(struct mlx5e_flow_steering *fs);
void mlx5e_accel_fs_tcp_destroy(struct mlx5e_flow_steering *fs);
struct mlx5_flow_handle *mlx5e_accel_fs_add_sk(struct mlx5e_flow_steering *fs,
					       struct sock *sk, u32 tirn,
					       u32 flow_tag);
void mlx5e_accel_fs_del_sk(struct mlx5_flow_handle *rule);
#else
static inline int mlx5e_accel_fs_tcp_create(struct mlx5e_flow_steering *fs) { return 0; }
static inline void mlx5e_accel_fs_tcp_destroy(struct mlx5e_flow_steering *fs) {}
static inline struct mlx5_flow_handle *mlx5e_accel_fs_add_sk(struct mlx5e_flow_steering *fs,
							     struct sock *sk, u32 tirn,
							     u32 flow_tag)
{ return ERR_PTR(-EOPNOTSUPP); }
static inline void mlx5e_accel_fs_del_sk(struct mlx5_flow_handle *rule) {}
#endif

#endif /* __MLX5E_ACCEL_FS_TCP_H__ */


```
