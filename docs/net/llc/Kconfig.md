---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `net/llc/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config LLC
	tristate

config LLC2
	tristate "ANSI/IEEE 802.2 LLC type 2 Support"
	select LLC
	help
	  This is a Logical Link Layer type 2, connection oriented support.
	  Select this if you want to have support for PF_LLC sockets.

```
