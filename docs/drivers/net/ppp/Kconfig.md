---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ppp/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# PPP network device configuration
#

config PPP
	tristate "PPP (point-to-point protocol) support"
	select SLHC
	help
	  PPP (Point to Point Protocol) is a newer and better SLIP.  It serves
	  the same purpose: sending Internet traffic over telephone (and other
	  serial) lines.  Ask your access provider if they support it, because
	  otherwise you can't use it; most Internet access providers these
	  days support PPP rather than SLIP.

	  To use PPP, you need an additional program called pppd as described
	  in the PPP-HOWTO, available at
	  <http://www.tldp.org/docs.html#howto>.  Make sure that you have
	  the version of pppd recommended in <file:Documentation/Changes>.
	  The PPP option enlarges your kernel by about 16 KB.

	  There are actually two versions of PPP: the traditional PPP for
	  asynchronous lines, such as regular analog phone lines, and
	  synchronous PPP which can be used over digital ISDN lines for
	  example.  If you want to use PPP over phone lines or other
	  asynchronous serial lines, you need to say Y (or M) here and also to
	  the next option, "PPP support for async serial ports".  For PPP over
	  synchronous lines, you should say Y (or M) here and to "Support
	  synchronous PPP", below.

	  If you said Y to "Version information on all symbols" above, then
	  you cannot compile the PPP driver into the kernel; you can then only
	  compile it as a module. To compile this driver as a module, choose M
	  here. The module will be called ppp_generic.

if PPP

config PPP_BSDCOMP
	tristate "PPP BSD-Compress compression"
	depends on PPP
	help
	  Support for the BSD-Compress compression method for PPP, which uses
	  the LZW compression method to compress each PPP packet before it is
	  sent over the wire. The machine at the other end of the PPP link
	  (usually your ISP) has to support the BSD-Compress compression
	  method as well for this to be useful. Even if they don't support it,
	  it is safe to say Y here.

	  The PPP Deflate compression method ("PPP Deflate compression",
	  above) is preferable to BSD-Compress, because it compresses better
	  and is patent-free.

	  Note that the BSD compression code will always be compiled as a
	  module; it is called bsd_comp and will show up in the directory
	  modules once you have said "make modules". If unsure, say N.

config PPP_DEFLATE
	tristate "PPP Deflate compression"
	depends on PPP
	select ZLIB_INFLATE
	select ZLIB_DEFLATE
	help
	  Support for the Deflate compression method for PPP, which uses the
	  Deflate algorithm (the same algorithm that gzip uses) to compress
	  each PPP packet before it is sent over the wire.  The machine at the
	  other end of the PPP link (usually your ISP) has to support the
	  Deflate compression method as well for this to be useful.  Even if
	  they don't support it, it is safe to say Y here.

	  To compile this driver as a module, choose M here.

config PPP_FILTER
	bool "PPP filtering"
	depends on PPP
	help
	  Say Y here if you want to be able to filter the packets passing over
	  PPP interfaces.  This allows you to control which packets count as
	  activity (i.e. which packets will reset the idle timer or bring up
	  a demand-dialed link) and which packets are to be dropped entirely.
	  You need to say Y here if you wish to use the pass-filter and
	  active-filter options to pppd.

	  If unsure, say N.

config PPP_MPPE
	tristate "PPP MPPE compression (encryption)"
	depends on PPP
	select CRYPTO
	select CRYPTO_SHA1
	select CRYPTO_LIB_ARC4
	help
	  Support for the MPPE Encryption protocol, as employed by the
	  Microsoft Point-to-Point Tunneling Protocol.

	  See http://pptpclient.sourceforge.net/ for information on
	  configuring PPTP clients and servers to utilize this method.

config PPP_MULTILINK
	bool "PPP multilink support"
	depends on PPP
	help
	  PPP multilink is a protocol (defined in RFC 1990) which allows you
	  to combine several (logical or physical) lines into one logical PPP
	  connection, so that you can utilize your full bandwidth.

	  This has to be supported at the other end as well and you need a
	  version of the pppd daemon which understands the multilink protocol.

	  If unsure, say N.

config PPPOATM
	tristate "PPP over ATM"
	depends on ATM && PPP
	help
	  Support PPP (Point to Point Protocol) encapsulated in ATM frames.
	  This implementation does not yet comply with section 8 of RFC2364,
	  which can lead to bad results if the ATM peer loses state and
	  changes its encapsulation unilaterally.

config PPPOE
	tristate "PPP over Ethernet"
	depends on PPP
	help
	  Support for PPP over Ethernet.

	  This driver requires the latest version of pppd from the CVS
	  repository at cvs.samba.org.  Alternatively, see the
	  RoaringPenguin package (<http://www.roaringpenguin.com/pppoe>)
	  which contains instruction on how to use this driver (under
	  the heading "Kernel mode PPPoE").

choice
	prompt "Number of PPPoE hash bits"
	default PPPOE_HASH_BITS_4
	depends on PPPOE
	help
		Select the number of bits used for hashing PPPoE interfaces.

		Larger sizes reduces the risk of hash collisions at the cost
		of slightly increased memory usage.

		This hash table is on a per outer ethernet interface.

config PPPOE_HASH_BITS_1
	bool "1 bit (2 buckets)"

config PPPOE_HASH_BITS_2
	bool "2 bits (4 buckets)"

config PPPOE_HASH_BITS_4
	bool "4 bits (16 buckets)"

config PPPOE_HASH_BITS_8
	bool "8 bits (256 buckets)"

endchoice

config PPPOE_HASH_BITS
	int
	default 1 if PPPOE_HASH_BITS_1
	default 2 if PPPOE_HASH_BITS_2
	default 4 if PPPOE_HASH_BITS_4
	default 8 if PPPOE_HASH_BITS_8
	default 4

config PPTP
	tristate "PPP over IPv4 (PPTP)"
	depends on PPP && NET_IPGRE_DEMUX
	help
	  Support for PPP over IPv4.(Point-to-Point Tunneling Protocol)

	  This driver requires pppd plugin to work in client mode or
	  modified pptpd (poptop) to work in server mode.
	  See http://accel-pptp.sourceforge.net/ for information how to
	  utilize this module.

config PPPOL2TP
	tristate "PPP over L2TP"
	depends on L2TP && PPP
	help
	  Support for PPP-over-L2TP socket family. L2TP is a protocol
	  used by ISPs and enterprises to tunnel PPP traffic over UDP
	  tunnels. L2TP is replacing PPTP for VPN uses.
if TTY

config PPP_ASYNC
	tristate "PPP support for async serial ports"
	depends on PPP
	select CRC_CCITT
	help
	  Say Y (or M) here if you want to be able to use PPP over standard
	  asynchronous serial ports, such as COM1 or COM2 on a PC.  If you use
	  a modem (not a synchronous or ISDN modem) to contact your ISP, you
	  need this option.

	  To compile this driver as a module, choose M here.

	  If unsure, say Y.

config PPP_SYNC_TTY
	tristate "PPP support for sync tty ports"
	depends on PPP
	help
	  Say Y (or M) here if you want to be able to use PPP over synchronous
	  (HDLC) tty devices, such as the SyncLink adapter. These devices
	  are often used for high-speed leased lines like T1/E1.

	  To compile this driver as a module, choose M here.

endif # TTY

endif # PPP

```
