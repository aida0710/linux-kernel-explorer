---
sidebar_position: 52
---
# debugfs-olpc

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/debugfs-olpc`

### コンテンツ

```txt
What:		/sys/kernel/debug/olpc-ec/cmd
Date:		Dec 2011
KernelVersion:	3.4
Contact:	devel@lists.laptop.org
Description:

A generic interface for executing OLPC Embedded Controller commands and
reading their responses.

To execute a command, write data with the format: CC:N A A A A
CC is the (hex) command, N is the count of expected reply bytes, and A A A A
are optional (hex) arguments.

To read the response (if any), read from the generic node after executing
a command. Hex reply bytes will be returned, *whether or not* they came from
the immediately previous command.

```
