---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `net/x25/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# CCITT X.25 Packet Layer
#

config X25
	tristate "CCITT X.25 Packet Layer"
	help
	  X.25 is a set of standardized network protocols, similar in scope to
	  frame relay; the one physical line from your box to the X.25 network
	  entry point can carry several logical point-to-point connections
	  (called "virtual circuits") to other computers connected to the X.25
	  network. Governments, banks, and other organizations tend to use it
	  to connect to each other or to form Wide Area Networks (WANs). Many
	  countries have public X.25 networks. X.25 consists of two
	  protocols: the higher level Packet Layer Protocol (PLP) (say Y here
	  if you want that) and the lower level data link layer protocol LAPB
	  (say Y to "LAPB Data Link Driver" below if you want that).

	  Information about X.25 for Linux is contained in the files
	  <file:Documentation/networking/x25.rst> and
	  <file:Documentation/networking/x25-iface.rst>.

	  One connects to an X.25 network either with a dedicated network card
	  using the X.21 protocol (not yet supported by Linux) or one can do
	  X.25 over a standard telephone line using an ordinary modem (say Y
	  to "X.25 async driver" below) or over Ethernet using an ordinary
	  Ethernet card and the LAPB over Ethernet (say Y to "LAPB Data Link
	  Driver" and "LAPB over Ethernet driver" below).

	  To compile this driver as a module, choose M here: the module
	  will be called x25. If unsure, say N.

```
