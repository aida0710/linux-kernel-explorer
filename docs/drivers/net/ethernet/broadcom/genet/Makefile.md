---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/broadcom/genet/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_BCMGENET) += genet.o
genet-objs := bcmgenet.o bcmmii.o bcmgenet_wol.o

```
