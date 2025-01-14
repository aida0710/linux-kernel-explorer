---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/pnp/pnpacpi/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Plug and Play ACPI configuration
#
config PNPACPI
	bool
	default (PNP && ACPI)

```
