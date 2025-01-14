---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/vfio/mdev/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

mdev-y := mdev_core.o mdev_sysfs.o mdev_driver.o

obj-$(CONFIG_VFIO_MDEV) += mdev.o

```
