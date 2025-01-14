---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/intel/qat/qat_c3xxx/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
ccflags-y := -I $(src)/../qat_common
obj-$(CONFIG_CRYPTO_DEV_QAT_C3XXX) += qat_c3xxx.o
qat_c3xxx-objs := adf_drv.o adf_c3xxx_hw_data.o

```
