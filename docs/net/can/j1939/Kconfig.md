---
sidebar_position: 4
---
# Kconfig

### ファイル情報

- パス: `net/can/j1939/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# SAE J1939 network layer core configuration
#

config CAN_J1939
	tristate "SAE J1939"
	depends on CAN
	help
	  SAE J1939
	  Say Y to have in-kernel support for j1939 socket type. This
	  allows communication according to SAE j1939.
	  The relevant parts in kernel are
	  SAE j1939-21 (datalink & transport protocol)
	  & SAE j1939-81 (network management).

```
