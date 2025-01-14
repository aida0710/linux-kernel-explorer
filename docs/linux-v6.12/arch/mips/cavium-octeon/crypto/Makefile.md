---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/mips/cavium-octeon/crypto/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# OCTEON-specific crypto modules.
#

obj-y += octeon-crypto.o

obj-$(CONFIG_CRYPTO_MD5_OCTEON)		+= octeon-md5.o
obj-$(CONFIG_CRYPTO_SHA1_OCTEON)	+= octeon-sha1.o
obj-$(CONFIG_CRYPTO_SHA256_OCTEON)	+= octeon-sha256.o
obj-$(CONFIG_CRYPTO_SHA512_OCTEON)	+= octeon-sha512.o

```
