---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/bcm/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
# File: drivers/crypto/bcm/Makefile
#
# Makefile for crypto acceleration files for Broadcom SPU driver
#
# Uncomment to enable debug tracing in the SPU driver.
# CFLAGS_util.o := -DDEBUG
# CFLAGS_cipher.o := -DDEBUG
# CFLAGS_spu.o := -DDEBUG
# CFLAGS_spu2.o := -DDEBUG

obj-$(CONFIG_CRYPTO_DEV_BCM_SPU) := bcm_crypto_spu.o

bcm_crypto_spu-objs :=  util.o spu.o spu2.o cipher.o

```
