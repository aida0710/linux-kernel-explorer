---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `net/netlabel/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# NetLabel configuration
#

config NETLABEL
	bool "NetLabel subsystem support"
	depends on SECURITY
	select CRC_CCITT if IPV6
	default n
	help
	  NetLabel provides support for explicit network packet labeling
	  protocols such as CIPSO and RIPSO.  For more information see
	  Documentation/netlabel as well as the NetLabel SourceForge project
	  for configuration tools and additional documentation.

	   * https://github.com/netlabel/netlabel_tools

	  If you are unsure, say N.

```
