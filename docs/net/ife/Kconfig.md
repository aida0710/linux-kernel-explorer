---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `net/ife/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# IFE subsystem configuration
#

menuconfig NET_IFE
	tristate "Inter-FE based on IETF ForCES InterFE LFB"
	default n
	help
	  Say Y here to add support of IFE encapsulation protocol
	  For details refer to netdev01 paper:
	  "Distributing Linux Traffic Control Classifier-Action Subsystem"
	   Authors: Jamal Hadi Salim and Damascene M. Joachimpillai

	  To compile this support as a module, choose M here: the module will
	  be called ife.

```
