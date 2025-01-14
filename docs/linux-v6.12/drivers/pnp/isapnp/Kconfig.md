---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/pnp/isapnp/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# ISA Plug and Play configuration
#
config ISAPNP
	bool "ISA Plug and Play support"
	depends on ISA || (HAS_IOPORT && COMPILE_TEST)
	help
	  Say Y here if you would like support for ISA Plug and Play devices.
	  Some information is in <file:Documentation/userspace-api/isapnp.rst>.

	  If unsure, say Y.

```
