===
{
    "title":"GCC 和 Make 编译，链接， 构建 c/c++ 应用",
    "author":"xiebaochun",
    "categories":["计算机"],
    "tags":["c++"],
    "createtime":"2016-09-01"
}
===

# GCC 和 Make 编译，链接， 构建 c/c++ 应用

## 1. GCC(GCC Compiler Collection)

### 1.1 关于GCC的简要历史和介绍

原始的GNU C Compiler(GCC)是由Richard Stallman（GNU项目的成立者）开发的。为了促进电脑用户和开发者之间的自由合作，他在1984年创建了一个完整的免费软件unix-like操作系统。

GCC之前被称为"GNU C Compiler", 随着不断的支持更多的语言，不如C++, Objective-C, Java, Fortran和Ada。 现在它代表的是"GNU Compiler Collection"。GCC的主网站是http://gcc.gnu.org/。

为了开发应用及者操作系统，GCC是"GNU Toolchain"的重要组成部分之一。GNU工具链包括：

+ 1.GNU Compiler Collection(GCC):支持多语言（如C/C++,Objective-C和Java）的编译工具套件。

+ 2.GNU Make:编译构建应用的一个自动化工具。

+ 3.GNU Binutils:一个二进制工具套件，包括连接器和汇编器。

+ 4.GNU Debugger(GDB)。

+ 5.GNU Autotools: 一个构建系统，包括Autoconf, Autoheader, Automake 和 Libtool。

GCC是跨平台的并且可以运行在很多操作平台上。GCC(和GNU工具链)目前可适用于所有Unixes操作系统。它们也可以通过MinGW或Cygwin移植到Windows上。GCC也是一个跨平台编译器，可以在不同的平台上生成可执行文件。

GCC的不同版本如下：

+ 在1987年，第一个GCC版本发布。

+ 在1992年，GCC的第二个版本发布，并支持C++。

+ 在2001年，GCC的第3个版本发布，包含了ECGS(GNU编译系统的实验项目)，并提升了整体效率

+ 在2005年，GCC第4个版本发布。2012年七月，最新的发布版本是4.7.4

### 1.2 安装GCC

所有的Unixes操作系统都包含了GCC(GNU Toolchain)。对于Windows用户，你可以安装MinGW GCC或者Cygwin GCC,请查看['"How to install Cygwin and MinGW".'](http://www3.ntu.edu.sg/home/ehchua/programming/howto/Cygwin_HowTo.html)

#### MinGW GCC

MinGW(Windows和GNU简化版)是用于windows上的GNU Compiler Collection(GCC)和GNU Binutils的一个实现。它也包含了MSYS(Minimal System),它是一个建简易的Bourne shell(bash)

#### Cygwin GCC

Cygwin是一个Unix-like环境和Microsoft 
Windows的命令行接口。Cygwin非常大，它包含了大部分的Unix工具和设施。它同样也包含了常用的Bash shell。

Cygwin安装了两个版本的GCC，分别是gcc-3.exe和gcc-4.exe(g++-3.exe和g++-4.exe)。它也提供了gcc.exe和g++.exe两个符号链接，分别连接到gcc-4.exe和g++-4.exe。

#### 版本

你可以通过--versin选项显示GCC版本

	// Cygwin in bash shell
	$ gcc --version
	gcc (GCC) 4.5.3
	 
	$ gcc-3 --version
	gcc-3 (GCC) 3.4.4 (cygming special, gdc 0.12, using dmd 0.125)
	 
	// MinGW in CMD shell
	> gcc --version
	gcc (GCC) 4.6.2
	 
	> g++ --version
	gcc (GCC) 4.6.2

要获取更多的信息可以通过-v选项，例如：

	> gcc -v
	Using built-in specs.
	COLLECT_GCC=gcc
	COLLECT_LTO_WRAPPER=d:/mingw/bin/../libexec/gcc/mingw32/4.6.2/lto-wrapper.exe
	Target: mingw32
	Configured with: ../gcc-4.6.2/configure --enable-languages=c,c++,ada,fortran,objc,obj-c++ 
	  --disable-sjlj-exceptions --with-dwarf2 --enable-shared --enable-libgomp 
	  --disable-win32-registry --enable-libstdcxx-debug --enable-version-specific-runtime-libs 
	  --build=mingw32 --prefix=/mingw
	Thread model: win32
	gcc version 4.6.2 (GCC)

#### 帮助
你可以通过--help选项获取帮助手册，例如：
	> gcc --help

#### 手册页面
你可以通过手册工具阅读GCC的页面：
	> man gcc
	// or
	> man g++
	// Press space key for next page, or 'q' to quit

在CMD或者Bash阅读手册页面比较麻烦。你可以通过如下命令生成文本文件进行查看：
	> man gcc | col -b > gcc.txt

col需要带上退格（-b）。（如果是Cygwin，此命令在"Utils","util-linux"包中。）
另外，你也可以查看在线手册，网址：[http://linux.die.net/man/1/gcc](http://linux.die.net/man/1/gcc.)

如果是MinGW,GCC的文档在“share\man\man1\gcc.1"目录下。如果是Cygwin，则在”usr\share\man\man1".

### 1.3 准备

GCC C和C++编译器分别对应gcc和g++。

编译/链接简单的c程序 hello.c
下面


Translate From:  
[http://www3.ntu.edu.sg/home/ehchua/programming/cpp/gcc_make.html](http://www3.ntu.edu.sg/home/ehchua/programming/cpp/gcc_make.html)