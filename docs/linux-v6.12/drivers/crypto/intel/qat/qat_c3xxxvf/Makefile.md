---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/intel/qat/qat_c3xxxvf/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
ccflags-y := -I $(src)/../qat_common
obj-$(CONFIG_CRYPTO_DEV_QAT_C3XXXVF) += qat_c3xxxvf.o
qat_c3xxxvf-objs := adf_drv.o adf_c3xxxvf_hw_data.o

```
