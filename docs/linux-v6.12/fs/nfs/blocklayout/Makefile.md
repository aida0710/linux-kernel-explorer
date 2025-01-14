---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/nfs/blocklayout/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the pNFS block layout driver kernel module
#
obj-$(CONFIG_PNFS_BLOCK) += blocklayoutdriver.o

blocklayoutdriver-y += blocklayout.o dev.o extent_tree.o rpc_pipefs.o

```
