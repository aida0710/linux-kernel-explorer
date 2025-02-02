---
sidebar_position: 4
---
# Kconfig

### ファイル情報

- パス: `net/appletalk/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Appletalk configuration
#
config ATALK
	tristate "Appletalk protocol support"
	select LLC
	help
	  AppleTalk is the protocol that Apple computers can use to communicate
	  on a network.  If your Linux box is connected to such a network and you
	  wish to connect to it, say Y.  You will need to use the netatalk package
	  so that your Linux box can act as a print and file server for Macs as
	  well as access AppleTalk printers.  Check out
	  <http://www.zettabyte.net/netatalk/> on the WWW for details.
	  EtherTalk is the name used for AppleTalk over Ethernet and the
	  cheaper and slower LocalTalk is AppleTalk over a proprietary Apple
	  network using serial links.  EtherTalk and LocalTalk are fully
	  supported by Linux.

	  General information about how to connect Linux, Windows machines and
	  Macs is on the WWW at <http://www.eats.com/linux_mac_win.html>.  The
	  NET3-4-HOWTO, available from
	  <http://www.tldp.org/docs.html#howto>, contains valuable
	  information as well.

	  To compile this driver as a module, choose M here: the module will be
	  called appletalk. You almost certainly want to compile it as a
	  module so you can restart your AppleTalk stack without rebooting
	  your machine. I hear that the GNU boycott of Apple is over, so
	  even politically correct people are allowed to say Y here.

```
