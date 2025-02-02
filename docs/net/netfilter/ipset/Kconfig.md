---
sidebar_position: 21
---
# Kconfig

### ファイル情報

- パス: `net/netfilter/ipset/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
menuconfig IP_SET
	tristate "IP set support"
	depends on INET && NETFILTER
	select NETFILTER_NETLINK
	help
	  This option adds IP set support to the kernel.
	  In order to define and use the sets, you need the userspace utility
	  ipset(8). You can use the sets in netfilter via the "set" match
	  and "SET" target.

	  To compile it as a module, choose M here.  If unsure, say N.

if IP_SET

config IP_SET_MAX
	int "Maximum number of IP sets"
	default 256
	range 2 65534
	depends on IP_SET
	help
	  You can define here default value of the maximum number 
	  of IP sets for the kernel.

	  The value can be overridden by the 'max_sets' module
	  parameter of the 'ip_set' module.

config IP_SET_BITMAP_IP
	tristate "bitmap:ip set support"
	depends on IP_SET
	help
	  This option adds the bitmap:ip set type support, by which one
	  can store IPv4 addresses (or network addresses) from a range.

	  To compile it as a module, choose M here.  If unsure, say N.

config IP_SET_BITMAP_IPMAC
	tristate "bitmap:ip,mac set support"
	depends on IP_SET
	help
	  This option adds the bitmap:ip,mac set type support, by which one
	  can store IPv4 address and (source) MAC address pairs from a range.

	  To compile it as a module, choose M here.  If unsure, say N.

config IP_SET_BITMAP_PORT
	tristate "bitmap:port set support"
	depends on IP_SET
	help
	  This option adds the bitmap:port set type support, by which one
	  can store TCP/UDP port numbers from a range.

	  To compile it as a module, choose M here.  If unsure, say N.

config IP_SET_HASH_IP
	tristate "hash:ip set support"
	depends on IP_SET
	help
	  This option adds the hash:ip set type support, by which one
	  can store arbitrary IPv4 or IPv6 addresses (or network addresses)
	  in a set.

	  To compile it as a module, choose M here.  If unsure, say N.

config IP_SET_HASH_IPMARK
	tristate "hash:ip,mark set support"
	depends on IP_SET
	help
	  This option adds the hash:ip,mark set type support, by which one
	  can store IPv4/IPv6 address and mark pairs.

	  To compile it as a module, choose M here.  If unsure, say N.

config IP_SET_HASH_IPPORT
	tristate "hash:ip,port set support"
	depends on IP_SET
	help
	  This option adds the hash:ip,port set type support, by which one
	  can store IPv4/IPv6 address and protocol/port pairs.

	  To compile it as a module, choose M here.  If unsure, say N.

config IP_SET_HASH_IPPORTIP
	tristate "hash:ip,port,ip set support"
	depends on IP_SET
	help
	  This option adds the hash:ip,port,ip set type support, by which
	  one can store IPv4/IPv6 address, protocol/port, and IPv4/IPv6
	  address triples in a set.

	  To compile it as a module, choose M here.  If unsure, say N.

config IP_SET_HASH_IPPORTNET
	tristate "hash:ip,port,net set support"
	depends on IP_SET
	help
	  This option adds the hash:ip,port,net set type support, by which
	  one can store IPv4/IPv6 address, protocol/port, and IPv4/IPv6
	  network address/prefix triples in a set.

	  To compile it as a module, choose M here.  If unsure, say N.

config IP_SET_HASH_IPMAC
	tristate "hash:ip,mac set support"
	depends on IP_SET
	help
	  This option adds the hash:ip,mac set type support, by which
	  one can store IPv4/IPv6 address and MAC (ethernet address) pairs in a set.

	  To compile it as a module, choose M here.  If unsure, say N.

config IP_SET_HASH_MAC
	tristate "hash:mac set support"
	depends on IP_SET
	help
	  This option adds the hash:mac set type support, by which
	  one can store MAC (ethernet address) elements in a set.

	  To compile it as a module, choose M here.  If unsure, say N.

config IP_SET_HASH_NETPORTNET
	tristate "hash:net,port,net set support"
	depends on IP_SET
	help
	  This option adds the hash:net,port,net set type support, by which
	  one can store two IPv4/IPv6 subnets, and a protocol/port in a set.

	  To compile it as a module, choose M here.  If unsure, say N.

config IP_SET_HASH_NET
	tristate "hash:net set support"
	depends on IP_SET
	help
	  This option adds the hash:net set type support, by which
	  one can store IPv4/IPv6 network address/prefix elements in a set.

	  To compile it as a module, choose M here.  If unsure, say N.

config IP_SET_HASH_NETNET
	tristate "hash:net,net set support"
	depends on IP_SET
	help
	  This option adds the hash:net,net  set type support, by which
	  one can store IPv4/IPv6 network address/prefix pairs in a set.

	  To compile it as a module, choose M here.  If unsure, say N.

config IP_SET_HASH_NETPORT
	tristate "hash:net,port set support"
	depends on IP_SET
	help
	  This option adds the hash:net,port set type support, by which
	  one can store IPv4/IPv6 network address/prefix and
	  protocol/port pairs as elements in a set.

	  To compile it as a module, choose M here.  If unsure, say N.

config IP_SET_HASH_NETIFACE
	tristate "hash:net,iface set support"
	depends on IP_SET
	help
	  This option adds the hash:net,iface set type support, by which
	  one can store IPv4/IPv6 network address/prefix and
	  interface name pairs as elements in a set.

	  To compile it as a module, choose M here.  If unsure, say N.

config IP_SET_LIST_SET
	tristate "list:set set support"
	depends on IP_SET
	help
	  This option adds the list:set set type support. In this
	  kind of set one can store the name of other sets and it forms
	  an ordered union of the member sets.

	  To compile it as a module, choose M here.  If unsure, say N.

endif # IP_SET

```
