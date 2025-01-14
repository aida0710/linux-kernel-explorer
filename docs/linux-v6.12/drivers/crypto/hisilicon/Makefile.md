---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/hisilicon/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_CRYPTO_DEV_HISI_HPRE) += hpre/
obj-$(CONFIG_CRYPTO_DEV_HISI_SEC) += sec/
obj-$(CONFIG_CRYPTO_DEV_HISI_SEC2) += sec2/
obj-$(CONFIG_CRYPTO_DEV_HISI_QM) += hisi_qm.o
hisi_qm-objs = qm.o sgl.o debugfs.o
obj-$(CONFIG_CRYPTO_DEV_HISI_ZIP) += zip/
obj-$(CONFIG_CRYPTO_DEV_HISI_TRNG) += trng/

```
