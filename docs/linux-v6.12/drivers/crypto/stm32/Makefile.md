---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/stm32/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_CRYPTO_DEV_STM32_CRC) += stm32-crc32.o
obj-$(CONFIG_CRYPTO_DEV_STM32_HASH) += stm32-hash.o
obj-$(CONFIG_CRYPTO_DEV_STM32_CRYP) += stm32-cryp.o

```
