---
sidebar_position: 5
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/net/802/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config STP
	tristate
	select LLC

config GARP
	tristate
	select STP

config MRP
	tristate

```
