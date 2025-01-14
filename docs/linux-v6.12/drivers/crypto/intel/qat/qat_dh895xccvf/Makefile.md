---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/intel/qat/qat_dh895xccvf/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
ccflags-y := -I $(src)/../qat_common
obj-$(CONFIG_CRYPTO_DEV_QAT_DH895xCCVF) += qat_dh895xccvf.o
qat_dh895xccvf-objs := adf_drv.o adf_dh895xccvf_hw_data.o

```
