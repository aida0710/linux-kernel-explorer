---
sidebar_position: 5
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/tee/amdtee/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: MIT
# AMD-TEE Trusted Execution Environment Configuration
config AMDTEE
	tristate "AMD-TEE"
	default m
	depends on CRYPTO_DEV_SP_PSP && CRYPTO_DEV_CCP_DD
	help
	  This implements AMD's Trusted Execution Environment (TEE) driver.

```
