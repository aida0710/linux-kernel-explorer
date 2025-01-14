---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/hisilicon/sec/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_CRYPTO_DEV_HISI_SEC) += hisi_sec.o
hisi_sec-y = sec_algs.o sec_drv.o

```
