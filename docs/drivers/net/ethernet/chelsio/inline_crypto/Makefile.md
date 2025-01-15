---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/chelsio/inline_crypto/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_CRYPTO_DEV_CHELSIO_TLS) += chtls/
obj-$(CONFIG_CHELSIO_IPSEC_INLINE) += ch_ipsec/
obj-$(CONFIG_CHELSIO_TLS_DEVICE) += ch_ktls/

```
