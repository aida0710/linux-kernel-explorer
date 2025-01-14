---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/virtio/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config CRYPTO_DEV_VIRTIO
	tristate "VirtIO crypto driver"
	depends on VIRTIO
	select CRYPTO_AEAD
	select CRYPTO_AKCIPHER2
	select CRYPTO_SKCIPHER
	select CRYPTO_ENGINE
	select CRYPTO_RSA
	select MPILIB
	help
	  This driver provides support for virtio crypto device. If you
	  choose 'M' here, this module will be called virtio_crypto.

```
