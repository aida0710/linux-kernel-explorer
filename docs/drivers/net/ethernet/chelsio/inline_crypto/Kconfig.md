---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/chelsio/inline_crypto/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Chelsio inline crypto configuration
#

config CHELSIO_INLINE_CRYPTO
	bool "Chelsio Inline Crypto support"
	depends on CHELSIO_T4
	default y
	help
	  Enable support for inline crypto.
	  Allows enable/disable from list of inline crypto drivers.

if CHELSIO_INLINE_CRYPTO

config CRYPTO_DEV_CHELSIO_TLS
	tristate "Chelsio Crypto Inline TLS Driver"
	depends on CHELSIO_T4
	depends on TLS
	depends on TLS_TOE
	help
	  Support Chelsio Inline TLS with Chelsio crypto accelerator.
	  Enable inline TLS support for Tx and Rx.

	  To compile this driver as a module, choose M here: the module
	  will be called chtls.

config CHELSIO_IPSEC_INLINE
       tristate "Chelsio IPSec XFRM Tx crypto offload"
       depends on CHELSIO_T4
       depends on XFRM_OFFLOAD
       depends on INET_ESP_OFFLOAD || INET6_ESP_OFFLOAD
       help
        Support Chelsio Inline IPsec with Chelsio crypto accelerator.
        Enable inline IPsec support for Tx.

        To compile this driver as a module, choose M here: the module
        will be called ch_ipsec.

config CHELSIO_TLS_DEVICE
        tristate "Chelsio Inline KTLS Offload"
        depends on CHELSIO_T4
        depends on TLS
        depends on TLS_DEVICE
	select CRYPTO_LIB_AES
        help
          This flag enables support for kernel tls offload over Chelsio T6
          crypto accelerator. CONFIG_CHELSIO_TLS_DEVICE flag can be enabled
          only if CONFIG_TLS and CONFIG_TLS_DEVICE flags are enabled.

	  To compile this driver as a module, choose M here: the module
	  will be called ch_ktls.

endif # CHELSIO_INLINE_CRYPTO

```
