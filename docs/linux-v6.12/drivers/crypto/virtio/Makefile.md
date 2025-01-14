---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/virtio/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_CRYPTO_DEV_VIRTIO) += virtio_crypto.o
virtio_crypto-objs := \
	virtio_crypto_skcipher_algs.o \
	virtio_crypto_akcipher_algs.o \
	virtio_crypto_mgr.o \
	virtio_crypto_core.o

```
