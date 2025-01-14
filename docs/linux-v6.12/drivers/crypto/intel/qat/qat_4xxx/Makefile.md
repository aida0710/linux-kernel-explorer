---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/intel/qat/qat_4xxx/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: (BSD-3-Clause OR GPL-2.0-only)
ccflags-y := -I $(src)/../qat_common
obj-$(CONFIG_CRYPTO_DEV_QAT_4XXX) += qat_4xxx.o
qat_4xxx-objs := adf_drv.o adf_4xxx_hw_data.o

```
