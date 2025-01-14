---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/mellanox/mlxfw/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_MLXFW)	+= mlxfw.o
mlxfw-objs		:= mlxfw_fsm.o mlxfw_mfa2_tlv_multi.o mlxfw_mfa2.o

```
