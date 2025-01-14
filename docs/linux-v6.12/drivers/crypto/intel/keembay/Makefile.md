---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/intel/keembay/Makefile`

### コンテンツ

```txt
#
# Makefile for Intel Keem Bay OCS Crypto API Linux drivers
#
obj-$(CONFIG_CRYPTO_DEV_KEEMBAY_OCS_AES_SM4) += keembay-ocs-aes.o
keembay-ocs-aes-objs := keembay-ocs-aes-core.o ocs-aes.o

obj-$(CONFIG_CRYPTO_DEV_KEEMBAY_OCS_ECC) += keembay-ocs-ecc.o

obj-$(CONFIG_CRYPTO_DEV_KEEMBAY_OCS_HCU) += keembay-ocs-hcu.o
keembay-ocs-hcu-objs := keembay-ocs-hcu-core.o ocs-hcu.o

```
