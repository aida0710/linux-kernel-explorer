---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/vdpa/mlx5/Makefile`

### コンテンツ

```txt
subdir-ccflags-y += -I$(srctree)/drivers/vdpa/mlx5/core

obj-$(CONFIG_MLX5_VDPA_NET) += mlx5_vdpa.o
mlx5_vdpa-$(CONFIG_MLX5_VDPA_NET) += net/mlx5_vnet.o core/resources.o core/mr.o net/debug.o

```
