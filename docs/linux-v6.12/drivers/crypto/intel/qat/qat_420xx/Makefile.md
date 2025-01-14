---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/intel/qat/qat_420xx/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
ccflags-y := -I $(src)/../qat_common
obj-$(CONFIG_CRYPTO_DEV_QAT_420XX) += qat_420xx.o
qat_420xx-objs := adf_drv.o adf_420xx_hw_data.o

```
