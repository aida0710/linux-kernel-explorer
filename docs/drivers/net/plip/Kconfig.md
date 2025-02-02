---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/plip/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Parallel Line Internet Protocol (PLIP) network device configuration
#

config PLIP
	tristate "PLIP (parallel port) support"
	depends on PARPORT
	help
	  PLIP (Parallel Line Internet Protocol) is used to create a
	  reasonably fast mini network consisting of two (or, rarely, more)
	  local machines.  A PLIP link from a Linux box is a popular means to
	  install a Linux distribution on a machine which doesn't have a
	  CD-ROM drive (a minimal system has to be transferred with floppies
	  first). The kernels on both machines need to have this PLIP option
	  enabled for this to work.

	  The PLIP driver has two modes, mode 0 and mode 1.  The parallel
	  ports (the connectors at the computers with 25 holes) are connected
	  with "null printer" or "Turbo Laplink" cables which can transmit 4
	  bits at a time (mode 0) or with special PLIP cables, to be used on
	  bidirectional parallel ports only, which can transmit 8 bits at a
	  time (mode 1); you can find the wiring of these cables in
	  <file:Documentation/networking/plip.rst>.  The cables can be up to
	  15m long.  Mode 0 works also if one of the machines runs DOS/Windows
	  and has some PLIP software installed, e.g. the Crynwr PLIP packet
	  driver (<http://oak.oakland.edu/simtel.net/msdos/pktdrvr-pre.html>)
	  and winsock or NCSA's telnet.

	  If you want to use PLIP, say Y and read the PLIP mini-HOWTO as well
	  as the NET-3-HOWTO, both available from
	  <http://www.tldp.org/docs.html#howto>.  Note that the PLIP
	  protocol has been changed and this PLIP driver won't work together
	  with the PLIP support in Linux versions 1.0.x.  This option enlarges
	  your kernel by about 8 KB.

	  To compile this driver as a module, choose M here. The module
	  will be called plip. If unsure, say Y or M, in case you buy
	  a laptop later.

```
