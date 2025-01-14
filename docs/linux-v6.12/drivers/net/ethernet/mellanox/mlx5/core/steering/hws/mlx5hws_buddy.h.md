---
sidebar_position: 6
---
# mlx5hws_buddy.h

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/mellanox/mlx5/core/steering/hws/mlx5hws_buddy.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 OR Linux-OpenIB */
/* Copyright (c) 2024 NVIDIA Corporation & Affiliates */

#ifndef MLX5HWS_BUDDY_H_
#define MLX5HWS_BUDDY_H_

struct mlx5hws_buddy_mem {
	unsigned long **bitmap;
	unsigned int *num_free;
	u32 max_order;
};

struct mlx5hws_buddy_mem *mlx5hws_buddy_create(u32 max_order);

void mlx5hws_buddy_cleanup(struct mlx5hws_buddy_mem *buddy);

int mlx5hws_buddy_alloc_mem(struct mlx5hws_buddy_mem *buddy, u32 order);

void mlx5hws_buddy_free_mem(struct mlx5hws_buddy_mem *buddy, u32 seg, u32 order);

#endif /* MLX5HWS_BUDDY_H_ */

```
