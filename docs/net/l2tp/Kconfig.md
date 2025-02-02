---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `net/l2tp/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Layer Two Tunneling Protocol (L2TP)
#

menuconfig L2TP
	tristate "Layer Two Tunneling Protocol (L2TP)"
	depends on (IPV6 || IPV6=n)
	depends on INET
	select NET_UDP_TUNNEL
	help
	  Layer Two Tunneling Protocol

	  From RFC 2661 <http://www.ietf.org/rfc/rfc2661.txt>.

	  L2TP facilitates the tunneling of packets across an
	  intervening network in a way that is as transparent as
	  possible to both end-users and applications.

	  L2TP is often used to tunnel PPP traffic over IP
	  tunnels. One IP tunnel may carry thousands of individual PPP
	  connections. L2TP is also used as a VPN protocol, popular
	  with home workers to connect to their offices.

	  L2TPv3 allows other protocols as well as PPP to be carried
	  over L2TP tunnels. L2TPv3 is defined in RFC 3931
	  <http://www.ietf.org/rfc/rfc3931.txt>.

	  The kernel component handles only L2TP data packets: a
	  userland daemon handles L2TP the control protocol (tunnel
	  and session setup). One such daemon is OpenL2TP
	  (http://openl2tp.org/).

	  If you don't need L2TP, say N. To compile all L2TP code as
	  modules, choose M here.

config L2TP_DEBUGFS
	tristate "L2TP debugfs support"
	depends on L2TP && DEBUG_FS
	help
	  Support for l2tp directory in debugfs filesystem. This may be
	  used to dump internal state of the l2tp drivers for problem
	  analysis.

	  If unsure, say 'Y'.

	  To compile this driver as a module, choose M here. The module
	  will be called l2tp_debugfs.

config L2TP_V3
	bool "L2TPv3 support"
	depends on L2TP
	help
	  Layer Two Tunneling Protocol Version 3

	  From RFC 3931 <http://www.ietf.org/rfc/rfc3931.txt>.

	  The Layer Two Tunneling Protocol (L2TP) provides a dynamic
	  mechanism for tunneling Layer 2 (L2) "circuits" across a
	  packet-oriented data network (e.g., over IP).  L2TP, as
	  originally defined in RFC 2661, is a standard method for
	  tunneling Point-to-Point Protocol (PPP) [RFC1661] sessions.
	  L2TP has since been adopted for tunneling a number of other
	  L2 protocols, including ATM, Frame Relay, HDLC and even raw
	  ethernet frames.

	  If you are connecting to L2TPv3 equipment, or you want to
	  tunnel raw ethernet frames using L2TP, say Y here. If
	  unsure, say N.

config L2TP_IP
	tristate "L2TP IP encapsulation for L2TPv3"
	depends on L2TP_V3
	help
	  Support for L2TP-over-IP socket family.

	  The L2TPv3 protocol defines two possible encapsulations for
	  L2TP frames, namely UDP and plain IP (without UDP). This
	  driver provides a new L2TPIP socket family with which
	  userspace L2TPv3 daemons may create L2TP/IP tunnel sockets
	  when UDP encapsulation is not required. When L2TP is carried
	  in IP packets, it used IP protocol number 115, so this port
	  must be enabled in firewalls.

	  To compile this driver as a module, choose M here. The module
	  will be called l2tp_ip.

config L2TP_ETH
	tristate "L2TP ethernet pseudowire support for L2TPv3"
	depends on L2TP_V3
	help
	  Support for carrying raw ethernet frames over L2TPv3.

	  From RFC 4719 <http://www.ietf.org/rfc/rfc4719.txt>.

	  The Layer 2 Tunneling Protocol, Version 3 (L2TPv3) can be
	  used as a control protocol and for data encapsulation to set
	  up Pseudowires for transporting layer 2 Packet Data Units
	  across an IP network [RFC3931].

	  This driver provides an ethernet virtual interface for each
	  L2TP ethernet pseudowire instance. Standard Linux tools may
	  be used to assign an IP address to the local virtual
	  interface, or add the interface to a bridge.

	  If you are using L2TPv3, you will almost certainly want to
	  enable this option.

	  To compile this driver as a module, choose M here. The module
	  will be called l2tp_eth.

```
