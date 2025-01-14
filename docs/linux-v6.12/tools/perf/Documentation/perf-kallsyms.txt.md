---
sidebar_position: 46
---
# perf-kallsyms.txt

### ファイル情報

- パス: `linux-v6.12/tools/perf/Documentation/perf-kallsyms.txt`

### コンテンツ

```txt
perf-kallsyms(1)
================

NAME
----
perf-kallsyms - Searches running kernel for symbols

SYNOPSIS
--------
[verse]
'perf kallsyms' [<options>] symbol_name[,symbol_name...]

DESCRIPTION
-----------
This command searches the running kernel kallsyms file for the given symbol(s)
and prints information about it, including the DSO, the kallsyms begin/end
addresses and the addresses in the ELF kallsyms symbol table (for symbols in
modules).

OPTIONS
-------
-v::
--verbose::
	Increase verbosity level, showing details about symbol table loading, etc.

```
