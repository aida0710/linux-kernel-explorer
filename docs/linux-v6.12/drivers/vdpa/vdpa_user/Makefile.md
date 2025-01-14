---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/vdpa/vdpa_user/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

vduse-y := vduse_dev.o iova_domain.o

obj-$(CONFIG_VDPA_USER) += vduse.o

```
