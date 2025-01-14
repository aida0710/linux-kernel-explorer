---
sidebar_position: 5
---
# cpupower-info.1

### ファイル情報

- パス: `linux-v6.12/tools/power/cpupower/man/cpupower-info.1`

### コンテンツ

```1
.TH CPUPOWER\-INFO "1" "22/02/2011" "" "cpupower Manual"
.SH NAME
cpupower\-info \- Shows processor power related kernel or hardware configurations
.SH SYNOPSIS
.ft B
.B cpupower info [ \-b ]

.SH DESCRIPTION
\fBcpupower info \fP shows kernel configurations or processor hardware
registers affecting processor power saving policies.

Some options are platform wide, some affect single cores. By default values
of core zero are displayed only. cpupower --cpu all cpuinfo will show the
settings of all cores, see cpupower(1) how to choose specific cores.

.SH "SEE ALSO"
Options are described in detail in:

cpupower(1), cpupower-set(1)

```
