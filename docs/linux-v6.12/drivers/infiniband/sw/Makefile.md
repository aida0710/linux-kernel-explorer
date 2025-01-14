---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/sw/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_INFINIBAND_RDMAVT)		+= rdmavt/
obj-$(CONFIG_RDMA_RXE)			+= rxe/
obj-$(CONFIG_RDMA_SIW)			+= siw/

```
