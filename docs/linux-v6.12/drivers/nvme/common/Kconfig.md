---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/nvme/common/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

config NVME_KEYRING
       tristate
       select KEYS

config NVME_AUTH
	tristate
	select CRYPTO
	select CRYPTO_HMAC
	select CRYPTO_SHA256
	select CRYPTO_SHA512
	select CRYPTO_DH
	select CRYPTO_DH_RFC7919_GROUPS

```
