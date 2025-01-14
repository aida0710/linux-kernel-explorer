---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/tee/amdtee/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: MIT
obj-$(CONFIG_AMDTEE) += amdtee.o
amdtee-objs += core.o
amdtee-objs += call.o
amdtee-objs += shm_pool.o

```
