---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/vdpa/ifcvf/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_IFCVF) += ifcvf.o
ifcvf-$(CONFIG_IFCVF) += ifcvf_main.o ifcvf_base.o

```
