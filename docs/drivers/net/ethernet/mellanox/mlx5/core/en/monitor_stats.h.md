---
sidebar_position: 22
---
# monitor_stats.h

### ファイル情報

- パス: `drivers/net/ethernet/mellanox/mlx5/core/en/monitor_stats.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 OR Linux-OpenIB */
/* Copyright (c) 2018 Mellanox Technologies. */

#ifndef __MLX5_MONITOR_H__
#define __MLX5_MONITOR_H__

int  mlx5e_monitor_counter_supported(struct mlx5e_priv *priv);
void mlx5e_monitor_counter_init(struct mlx5e_priv *priv);
void mlx5e_monitor_counter_cleanup(struct mlx5e_priv *priv);

#endif /* __MLX5_MONITOR_H__ */

```
