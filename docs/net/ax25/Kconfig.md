---
sidebar_position: 18
---
# Kconfig

### ファイル情報

- パス: `net/ax25/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Amateur Radio protocols and AX.25 device configuration
#

menuconfig HAMRADIO
	depends on NET
	bool "Amateur Radio support"
	help
	  If you want to connect your Linux box to an amateur radio, answer Y
	  here. You want to read <https://www.tapr.org/>
	  and more specifically about AX.25 on Linux
	  <https://linux-ax25.in-berlin.de>.

	  Note that the answer to this question won't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about amateur radio.

comment "Packet Radio protocols"
	depends on HAMRADIO

config AX25
	tristate "Amateur Radio AX.25 Level 2 protocol"
	depends on HAMRADIO
	help
	  This is the protocol used for computer communication over amateur
	  radio. It is either used by itself for point-to-point links, or to
	  carry other protocols such as tcp/ip. To use it, you need a device
	  that connects your Linux box to your amateur radio. You can either
	  use a low speed TNC (a Terminal Node Controller acts as a kind of
	  modem connecting your computer's serial port to your radio's
	  microphone input and speaker output) supporting the KISS protocol or
	  one of the various SCC cards that are supported by the generic Z8530
	  or the DMA SCC driver. Another option are the Baycom modem serial
	  and parallel port hacks or the sound card modem (supported by their
	  own drivers). If you say Y here, you also have to say Y to one of
	  those drivers.

	  Information about where to get supporting software for Linux amateur
	  radio as well as information about how to configure an AX.25 port is
	  contained in the AX25-HOWTO, available from
	  <https://www.tldp.org/docs.html#howto>. You might also want to
	  check out the file <file:Documentation/networking/ax25.rst> in the
	  kernel source. More information about digital amateur radio in
	  general is on the WWW at
	  <https://www.tapr.org/>.

	  To compile this driver as a module, choose M here: the
	  module will be called ax25.

config AX25_DAMA_SLAVE
	bool "AX.25 DAMA Slave support"
	default y
	depends on AX25
	help
	  DAMA is a mechanism to prevent collisions when doing AX.25
	  networking. A DAMA server (called "master") accepts incoming traffic
	  from clients (called "slaves") and redistributes it to other slaves.
	  If you say Y here, your Linux box will act as a DAMA slave; this is
	  transparent in that you don't have to do any special DAMA
	  configuration. Linux cannot yet act as a DAMA server.  This option
	  only compiles DAMA slave support into the kernel.  It still needs to
	  be enabled at runtime.  For more about DAMA see
	  <https://linux-ax25.in-berlin.de>.  If unsure, say Y.

# placeholder until implemented
config AX25_DAMA_MASTER
	bool 'AX.25 DAMA Master support'
	depends on AX25_DAMA_SLAVE && BROKEN
	help
	  DAMA is a mechanism to prevent collisions when doing AX.25
	  networking. A DAMA server (called "master") accepts incoming traffic
	  from clients (called "slaves") and redistributes it to other slaves.
	  If you say Y here, your Linux box will act as a DAMA master; this is
	  transparent in that you don't have to do any special DAMA
	  configuration. Linux cannot yet act as a DAMA server.  This option
	  only compiles DAMA slave support into the kernel.  It still needs to
	  be explicitly enabled, so if unsure, say Y.

config NETROM
	tristate "Amateur Radio NET/ROM protocol"
	depends on AX25
	help
	  NET/ROM is a network layer protocol on top of AX.25 useful for
	  routing.

	  A comprehensive listing of all the software for Linux amateur radio
	  users as well as information about how to configure an AX.25 port is
	  contained in the Linux Ham Wiki, available from
	  <https://linux-ax25.in-berlin.de>. You also might want to check out
	  the file <file:Documentation/networking/ax25.rst>. More information
	  about digital amateur radio in general is on the WWW at
	  <https://www.tapr.org/>.

	  To compile this driver as a module, choose M here: the
	  module will be called netrom.

config ROSE
	tristate "Amateur Radio X.25 PLP (Rose)"
	depends on AX25
	help
	  The Packet Layer Protocol (PLP) is a way to route packets over X.25
	  connections in general and amateur radio AX.25 connections in
	  particular, essentially an alternative to NET/ROM.

	  A comprehensive listing of all the software for Linux amateur radio
	  users as well as information about how to configure an AX.25 port is
	  contained in the Linux Ham Wiki, available from
	  <https://linux-ax25.in-berlin.de>.  You also might want to check out
	  the file <file:Documentation/networking/ax25.rst>. More information
	  about digital amateur radio in general is on the WWW at
	  <https://www.tapr.org/>.

	  To compile this driver as a module, choose M here: the
	  module will be called rose.

menu "AX.25 network device drivers"
	depends on HAMRADIO && AX25

source "drivers/net/hamradio/Kconfig"

endmenu

```
