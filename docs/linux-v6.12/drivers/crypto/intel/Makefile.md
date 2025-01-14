---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/intel/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

obj-y += keembay/
obj-y += ixp4xx/
obj-$(CONFIG_CRYPTO_DEV_QAT) += qat/
obj-$(CONFIG_CRYPTO_DEV_IAA_CRYPTO) += iaa/

```
