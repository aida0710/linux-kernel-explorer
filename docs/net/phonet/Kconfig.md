---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `net/phonet/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Phonet protocol
#

config PHONET
	tristate "Phonet protocols family"
	help
	  The Phone Network protocol (PhoNet) is a packet-oriented
	  communication protocol developed by Nokia for use with its modems.

	  This is required for Maemo to use cellular data connectivity (if
	  supported). It can also be used to control Nokia phones
	  from a Linux computer, although AT commands may be easier to use.

	  To compile this driver as a module, choose M here: the module
	  will be called phonet. If unsure, say N.

```
