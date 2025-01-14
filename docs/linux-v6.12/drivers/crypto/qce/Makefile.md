---
sidebar_position: 10
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/qce/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_CRYPTO_DEV_QCE) += qcrypto.o
qcrypto-objs := core.o \
		common.o \
		dma.o

qcrypto-$(CONFIG_CRYPTO_DEV_QCE_SHA) += sha.o
qcrypto-$(CONFIG_CRYPTO_DEV_QCE_SKCIPHER) += skcipher.o
qcrypto-$(CONFIG_CRYPTO_DEV_QCE_AEAD) += aead.o

```
